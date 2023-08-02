export const NameMixin ={
    data(){
        return{    
            names:["sanaz","sepehr","mina","qolam"],
            filterText:""
        };
    },
    computed:{
        filteredName(){
            return this.names.filter(element =>{
                return element.match(this.filterText);
            });
        }
    }
};