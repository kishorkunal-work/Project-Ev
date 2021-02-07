import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    messageHtml: string = "",
    btnOkText: string = 'Confirm',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm' | 'lg' | 'xl' = 'lg'): Promise<boolean> {
    const modalRef = this.modalService.open(DialogComponent, { size: dialogSize, centered: true });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.messageHtml = messageHtml;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    return modalRef.result;
  }

}
