import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsdataService {

  
  elementsdata=[
    {
      id:'1',
      tag:"!DOCTYPE html",
      tagsyntax:"< !DOCTYPE html >",
      taglink:"/assets/documenttypetag.jpg",
      description:"According to the HTML specification or standards, every HTML document requires a document type declaration."
    },
    {
      id:'2',
      tag:"Anchor Tag",
      tagsyntax:"<a herf=” “> …</a>",
      taglink:"/assets/anchortag.jpg",
      description:"The anchor tag in HTML is used to create a hyperlink on the webpage."
    },
    {
      id:'3',
      tag:"Article Tag",
      tagsyntax:"<article>..</article>",
      taglink:"/assets/articletag.jpg",
      description:"The <article> tag is one of the new sectioning elements in HTML5. The tag is used to represent an article."
    },
    {
      id:'4',
      tag:"Audio Tag",
      tagsyntax:"<audio>..</audio>",
      taglink:"/assets/audiotag.jpg",
      description:"It is a useful tag if you want to add audio such as songs, interviews, etc. on your webpage."
    },
    {
      id:'5',
      tag:"Body Tag",
      tagsyntax:"<body> Contents… </body>",
      taglink:"/assets/bodytag.jpg",
      description:"The body tag in HTML is used to define the main content present inside an HTML page."
    },
    {
      id:'6',
      tag:"Break Tag",
      tagsyntax:"<br>",
      taglink:"/assets/breaktag.jpg",
      description:"The break tag inserts a single carriage return or breaks in the document. This element has no end tag."
    },
    {
      id:'7',
      tag:"Bold Tag",
      tagsyntax:"<b>… </b>",
      taglink:"/assets/boldtag.jpg",
      description:"The bold tag in HTML is used to specify the bold text without any extra importance."
    },
    {
      id:'8',
      tag:"Button Tag",
      tagsyntax:"<button type = “button”>",
      taglink:"/assets/buttontag.jpg",
      description:"The button tag in HTML is used to define the clickable button. <button> tag is used to submit the content."
    },
  ];


  constructor() { }
}
