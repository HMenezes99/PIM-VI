import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  formData: IUser = {
    name: '',
    rg: '',
    cpf: '',
    phone: '',
    email: '',
    address: '',
    created_at: new Date(),
  };

  async submitForm() {
    try {
      if (!this.formData.name) {
        alert('Não pode criar usuário sem preencher os campos!');
        return;
      }
      await this.userService.createUser(this.formData);
      alert('Criado!');
    } catch (error) {
      alert('Ocorreu um erro ao cadastrar o cliente');
    }
  }
}
