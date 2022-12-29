import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryForm: FormGroup = new FormGroup({});
  category: Category = {};

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.category = <Category> this.categoryService.findById(parseInt(id)).subscribe(category => {
          this.categoryForm = new FormGroup({
            name: new FormControl(this.category.name),
          });
        });
      }
    }, error => {
    }, () => {
    });
  }

  ngOnInit() {
  }


  updateCategory() {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(this.category.id, category).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

}
