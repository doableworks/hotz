import { PortableTextBlock } from "next-sanity";
export interface CareerListItem {
  _id: string;
  positionTitle: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  slug: string;
  tag?: 'careers';
}

export interface CareerDetail {
  _id: string;
  positionTitle: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  slug: string;
  role?: PortableTextBlock[]; // Portable Text (you can replace with PortableTextBlock[] if you use @portabletext/types)
  responsibilities?: PortableTextBlock[];
  qualifications?: PortableTextBlock[];
  whyJoinHotz?: PortableTextBlock[];
  tag?: 'careers';
}
