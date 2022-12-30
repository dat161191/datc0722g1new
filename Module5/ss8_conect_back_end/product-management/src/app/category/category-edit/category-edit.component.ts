import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryForm: FormGroup = new FormGroup({});
  category: Category | null = {};
  id: number | undefined;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      // @ts-ignore
      this.id = +data.get('id');
      if (this.id != null) {
        this.getCategory(this.id);
      }
    }, error => {
    }, () => {
    });
    this.categoryForm = new FormGroup(
      {
        id: new FormControl(this.category?.id),
        name: new FormControl(this.category?.name)
      });
  }

  ngOnInit(): void {
  }


  updateCategory(): void {
    this.category = this.categoryForm.value;
    // @ts-ignore
    this.categoryService.updateCategory(this.category.id, this.category).subscribe(() => {
      this.router.navigateByUrl('/category/list');
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

  // tslint:disable-next-line:typedef
  private getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(category => {
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name)
      });
    });

  }
}
