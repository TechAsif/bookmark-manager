import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalstorageService } from '../../../services/localstorage/localstorage.service';

export interface BookMarkForm {
  title: string;
  url: string;
  category: string;
}
export interface CategoryForm {
  name: string;
}

@Component({
  selector: 'app-bookmarkmodal',
  templateUrl: './bookmarkmodal.component.html',
  styleUrls: ['./bookmarkmodal.component.scss']
})
export class BookmarkmodalComponent implements OnInit {

  //Form Group
  bookMarkForm:FormGroup;
  isBookMarkSubmitted  = false;

  newcategory:string = ""
  isAddNewCategory: boolean = false;
  isCategoryDisabled: boolean = false;
  

  closeResult: string;

  categoryTypeList:any;
  selectedCategory:any;

  /* Demo Data Test */

  categoryList
  bookMarkList
  displayObject = {
    title:"",
    category: "",
    url:""

  }

  constructor(private modalService: NgbModal,private fb:FormBuilder,
    private localStorageService: LocalstorageService) {}
  
  ngOnInit(): void {

    this._bookMarkModalForm();
    this.categoryTypeList = this.localStorageService.getCategories()
    this.categoryList = this.localStorageService.getCategories()
    this.bookMarkList = this.localStorageService.getBookMarks()
    console.log(this.categoryList, this.bookMarkList);
    

  }

  open(content) {
     this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  private _bookMarkModalForm() {

    // ============== search form ==================
    this.bookMarkForm = this.fb.group({
      title: ['', [Validators.required]],
      url: ['', [Validators.required]],
      category: ['', [Validators.required]],
      newcategory: ['', []],
     
    });

  }

  changeIsAddNewCategory(){
    this.isAddNewCategory = !this.isAddNewCategory
    this.isCategoryDisabled = this.isCategoryDisabled = true;
    this.getBookMarkForm.category.disabled;
  }
  addBookMark(formValue: BookMarkForm) {

    this.isBookMarkSubmitted = true;
    console.log("new category",this.getBookMarkForm.newcategory.value);
    

    if(this.isAddNewCategory && this.getBookMarkForm.newcategory.value != ''){
      this.localStorageService.setCategory({name: this.getBookMarkForm.newcategory.value});
      this.modalService.dismissAll();
    }else{
      this.localStorageService.setBookMark(formValue);
    this.modalService.dismissAll();
    }

    
    
    
    
  }

  onSelectDolil(selectedCategory, event){

    console.log("Selected Dolil",selectedCategory);
    

  }

  showDetails(data){
    this.displayObject.title = data.title;
    this.displayObject.category = data.category;
    this.displayObject.url = data.url;

    console.log("Display object",this.displayObject);
    
  }

  get getBookMarkForm(){
    return this.bookMarkForm.controls;
  }

  validateTitle(){
    return this.getBookMarkForm.title.invalid && this.getBookMarkForm.dirty || this.getBookMarkForm.title.invalid && this.isBookMarkSubmitted;
  }
  validateUrl(){
    return this.getBookMarkForm.url.invalid && this.getBookMarkForm.dirty || this.getBookMarkForm.url.invalid && this.isBookMarkSubmitted;
  }
  validateCategory(){
    return this.getBookMarkForm.category.invalid && this.getBookMarkForm.dirty || this.getBookMarkForm.category.invalid && this.isBookMarkSubmitted;
  }

  validateNewCategory(){
    return this.newcategory == '' && this.isBookMarkSubmitted == true;
  }

}
