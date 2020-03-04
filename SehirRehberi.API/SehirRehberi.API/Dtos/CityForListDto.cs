using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SehirRehberi.API.Dtos
{
    //Dto lar gösterilmek istenen veri veya verileri gösterebilmek için yazılırlar. Örneğim biz
    //City propertylerinden ıd,name,description ve ulaşabildiğimiz photo classının photo url i almak istiyruz.
    //Bu yüzden aşağıdaki gibi istediğimiz propertyleri tanımladık.

    
    public class CityForListDto
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string PhotoUrl { get; set; }
        public string Description { get; set; }
    }
}
