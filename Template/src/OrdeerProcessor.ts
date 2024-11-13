// OrderProcessor.ts
export abstract class OrderProcessor {
    public processOrder(): void {
      this.checkStock();
      this.packageItem();
      this.shipItem();
      this.notifyCustomer();
    }
  
    protected abstract checkStock(): void;
    protected abstract packageItem(): void;
    protected abstract shipItem(): void;
  
    protected notifyCustomer(): void {
      console.log("Gửi thông báo cho khách hàng về tình trạng đơn hàng...\n");
    }
  }
  