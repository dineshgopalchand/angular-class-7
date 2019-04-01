import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  course = {
    title: 'Angular course',
    rating: 4.75232,
    students: 2000,
    price: 3873878310000,
    releaseDate: new Date(2018, 19, 10)
  };
  postContent = `Lorem ipsum dolor sit amet consectetur,
    adipisicing elit. Cupiditate ea nobis odit mollitia
    nostrum perspiciatis dolore! Recusandae voluptate commodi
    iure, velit iste impedit explicabo, ratione itaque quaerat
    eaque nihil magni ad totam officiis dolore, quos sit modi!
    Maiores amet quisquam doloremque quod officia aut voluptas
    doloribus illo! Asperiores, unde neque? Saepe ipsam, quia
    inventore asperiores earum repellat praesentium iste
    dignissimos? Quisquam facere quia ratione qui ut
    accusantium eum tenetur, earum dolorem quae, deleniti,
    illum consequuntur nulla? Quibusdam aspernatur quam sed,
    mollitia dicta nesciunt pariatur tempora quas molestiae
    ipsum qui quis at vitae explicabo soluta ea repudiandae
    veritatis exercitationem illum corrupti iure odio? Veniam
    repellat culpa assumenda omnis modi quae qui, vitae aliquid?
    Numquam fuga ut accusamus exercitationem, tenetur natus est
    sectetur praesentium perferendis ratione reprehenderit
    quasi, pariatur ipsa hic nam eos aut doloribus nesciunt.
    Mollitia perferendis odit sequi hic aut temporibus
    corrupti? Consequuntur dicta fugiat doloribus quae vitae
    sint asperiores atque suscipit eum amet sed aliquam,
     natus soluta repellat non neque deleniti? Distinctio
     qui sit, quos cupiditate repellendus, nobis ad eligendi
     laudantium rem, assumenda cumque? Exercitationem, magni!
     Sunt architecto aperiam esse dignissimos magnam, hic iusto
     perspiciatis quae obcaecati vel veniam autem nam eveniet in voluptatum assumenda. Minima
     deserunt minus perspiciatis fugit facere atque totam illo, modi unde. Asperiores earum deleniti
      enim quasi assumenda nisi mollitia
       fuga hic harum. Placeat blanditiis sapiente nemo esse nesciunt, nihil ducimus ex maxime cum voluptas,
      obcaecati maiores voluptates quae accusamus autem! Explicabo, in ullam debitis vitae
      deserunt alias. Itaque et sunt, fugiat libero modi voluptate sequi expedita possimus
       voluptatem blanditiis debitis laboriosam illum est amet tempora totam ducimus nam sit iure aut praesentium
       facilis quasi ratione molestias! Minima libero odio error molestiae necessitatibus rem molestias suscipit
       temporibus, maiores, adipisci ducimus commodi voluptate officiis dolorem eligendi voluptates eius maxime optio
       quam sit? Deleniti adipisci quam provident repellendus rem sint modi repudiandae ut accusantium voluptatibus
       velit, suscipit quasi non voluptates neque magni reprehenderit obcaecati maiores dicta tempora qui amet
       laudantium quis totam. Atque odit numquam beatae aliquam eum nisi, explicabo commodi temporibus nulla corrupti
       aliquid? Aperiam quidem nobis neque, iusto voluptas beatae nihil dolorum sint harum animi eos eius
       temporibus similique quas excepturi error a corrupti blanditiis quo molestias illo. Libero ea dicta at optio?
       Alias quo minima soluta ducimus corrupti sapiente cupiditate magni velit? Quaerat esse inventore laborum,
       ea possimus perferendis dolore quam fugit numquam ipsum atque nam assumenda expedita animi, veritatis pariatur
       nesciunt officiis, minima aspernatur laboriosam. Deleniti dolorem beatae aliquid, amet, eligendi natus
       eaque doloribus sint similique placeat itaque corrupti excepturi facere debitis fuga vitae laudantium
       architecto dolorum? Repudiandae veniam at rem praesentium obcaecati tempore. Dolor pariatur at
       deleniti ullam labore eum aspernatur adipisci voluptatem dolore ipsa atque doloribus consectetur suscipit quia
       molestiae velit, quibusdam error reiciendis dignissimos amet quae distinctio quam impedit? Obcaecati aliquid
       nemo magni minima velit. Harum architecto possimus explicabo sed, ex beatae consectetur eos provident?
       Exercitationem voluptatibus totam doloremque aspernatur, sit corporis dicta ad itaque beatae repellendus ipsum,
       impedit saepe fugiat eum fuga velit dolore veritatis obcaecati. Dolorem, fugit iure.`;
  constructor() { }

  ngOnInit() {
  }

}
