import {reactive} from 'vue';
import sampleProducts from '@/data/products';

export const store = reactive({
    items: [
    ],
    increase (item) {
        let indx = this.items.indexOf(item)
        item.quantity += 1
        let newValue = item
        this.items.splice(indx, 1, newValue)
    },
    remove(item) {
        let indx = this.items.indexOf(item)
        if (indx !== -1){
            this.items.splice(indx, 1)
        }
    },
    decrease (item) {
        if(item.quantity > 1){
            let indx = this.items.indexOf(item)
            item.quantity -= 1
            let newValue = item
            this.items.splice(indx, 1, newValue)
        } else{
            this.remove(item)
        }
        
    },
    addItem (id){
        let productToAdd = sampleProducts.find(product => product.id == id)
        if (productToAdd != undefined){
            let existedProduct = this.items.find(product => product.id == id)
            if (existedProduct === undefined){
                productToAdd['quantity'] = 1
                this.items.push(productToAdd)
            } else{
                this.increase(existedProduct)
            }
        }
    }

  })

