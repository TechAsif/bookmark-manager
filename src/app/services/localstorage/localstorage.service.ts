import { Injectable } from '@angular/core';
import { BookMarkForm, CategoryForm } from 'src/app/pages/components/bookmarkmodal/bookmarkmodal.component';


const BOOKMARKS = 'BOOKMARKS'
const CATEGORIES = 'CATEGORIES'

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  
  /* Set Bookmark in local storage */

  setBookMark(bookMark: BookMarkForm){

    //Get Existing Bookmarks
    const existingBookMark: any = JSON.parse(localStorage.getItem(BOOKMARKS))
    if(!existingBookMark){
      let arrayOfBookMark = [];
      arrayOfBookMark[0] =  bookMark;
      localStorage.setItem(BOOKMARKS,JSON.stringify(arrayOfBookMark))
    }else{

      existingBookMark.push(bookMark)
      localStorage.setItem(BOOKMARKS,JSON.stringify(existingBookMark))
    }

    
  }


  setCategory(category: CategoryForm){

    //Get Existing Bookmarks
    const existingCategories: any = JSON.parse(localStorage.getItem(CATEGORIES))
    if(!existingCategories){
      let arrayOfCategories = [];
      arrayOfCategories[0] =  category;
      localStorage.setItem(CATEGORIES,JSON.stringify(arrayOfCategories))
    }else{

      existingCategories.push(category)
      localStorage.setItem(CATEGORIES,JSON.stringify(existingCategories))
    }

    
  }

  getCategories(): any{
    return JSON.parse(localStorage.getItem(CATEGORIES));
  }
  getBookMarks(): any{
    return JSON.parse(localStorage.getItem(BOOKMARKS));
  }

}
