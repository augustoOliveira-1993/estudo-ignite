import { parse } from 'csv-parse'
import fs from 'fs'
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

interface IImportCategory {
    name: string;
    description: string
}

class ImportCategoryUseCase {

    constructor(private categoryRepositoy: ICategoryRepository){}

    loadCategories(file: Express.Multer.File){
      return new Promise((resolver, reject) => {
       const stream = fs.createReadStream(file.path)
       const categories: IImportCategory[] = []
    
       const parseFile = parse()

       stream.pipe(parseFile)

       parseFile.on('data', async (line) => {
        const [name, description ] = line
        categories.push({
            name, 
            description
        })
       })
       .on('end', ()=> {
        resolver(categories)
       })
       .on('error', (err) =>{
         reject(err)
       })
     })
        
    }

    async execute(file: Express.Multer.File): Promise<void>{
      const categories = await this.loadCategories(file)

      categories.map(async category => {
        const { name, description } = category

        const existCategory = this.categoryRepositoy.findByName(name)

        if(!existCategory){
            this.categoryRepositoy.create({
                name,
                description
            })
        }
      })
    }
}

export {
    ImportCategoryUseCase
}