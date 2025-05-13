export type Report = { 
  reportId: string;
  phoneNumber: string;
  propertyId: string;
  userId: string;
  addressLine1: string;
  city: string;
  state: string;
  postCode: string;
  isLocked: boolean;
  createdAt: Date;
  updatedAt: Date;    
  pdfUrl: string;
  spaces: string[];
  local_images: [];
  spaceCompleted: number;
  status: string; // "draft", "completed", "pdf_generated"
  paymentStatus: string; // "paid", "unpaid"
};

export type User = {
  phoneNumber: string;
  uid: string;
  createdAt: Date;
  reportId: string;
  reportsCreated: number;
  reportsPaid: number;
}