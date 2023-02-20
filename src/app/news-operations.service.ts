import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsOperationsService {

  constructor() { 
    let news1:News=new News('Nifty closes below 18,000','BusinessNews','Global markets remain under pressure after comments by Fed officials indicating further interest rate hikes depressed investor sentiments.','StockMarket.jpg')
    let news2:News=new News('GST Council meet','BusinessNews','Finance Minister Nirmala Sitharaman on Saturday announced that the GST Council has given its approval to clear Rs 16,982 cr balance of compensation to states','GST.jpg')
    let news3:News=new News('Liquor Scam Case','Politics','CBI to Reissue Fresh Date as Manish Sisodia Asks for More Time on Summon','Politics.jpg')
    let news4:News=new News('Nikki murder case','Crime','In the killing of 25-year-old Haryana woman Nikki Yadav','Crime.jpg')
    let news5:News=new News('Turkey, Syria earthquake','World','At least 16,170 people have died in Turkey','WorldNews.jpg')
    let news6:News=new News('SpaceX faces FAA fine for breach of launch rules','Technology','SpaceX was required to submit the data to the agency at least seven days prior to an attempted launch','Technology.jpg')
    let news7:News=new News('Liverpool Beats Newcastle','Sports','Live football news including the latest on the situation at Manchester United and all the latest Premier League news and reaction after wins...','Sports.jpg')

    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)
    this.newsArr.push(news7)
  }

  newsArr:News[] = [];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {

   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }
  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }

    return outputNews;
  }
  }