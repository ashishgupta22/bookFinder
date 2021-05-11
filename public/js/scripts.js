function findBook(){
    var userSearch = document.getElementById('userInput').value;
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" +userSearch,
        dataType: "JSON",
        success: function(book){
            console.log(book);
            for(var i = 0; book.items.length; i++){
                var WrapperDiv = document.createElement('div');
                WrapperDiv.className = 'row';

                //Create img elements for images
                var image = document.createElement('img');
                image.className = 'col-md-2';
                image.style.height =  "10%";
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail;

                //Create div element with Class of media-body
                var div = document.createElement('div');
                div.className = "col-md-10";
                
                //Create Header For the Body
                var header = document.createElement('h2');
             //   header.className = "mt-1";
                header.innerHTML = book.items[i].volumeInfo.title;

                //Append header to the body
                div.appendChild(header);
                WrapperDiv.appendChild(image);
                WrapperDiv.appendChild(div);
                //create h5 element for author
                var author = document.createElement('h6')
                author.innerHTML = '<b>Authors:</b>' + ' ' +  book.items[i].volumeInfo.authors;
                div.appendChild(author);
                //create paragraph for country
                var country = document.createElement('p');
                country.innerHTML = '<b>Country:</b>' + ' ' + book.items[i].accessInfo.country;
                div.appendChild(country);

                //create paragraph for pageCount
                var pageCount = document.createElement('p');
                pageCount.innerHTML = '<b>Total Pages:</b>' + ' ' +  book.items[i].volumeInfo.pageCount;
                div.appendChild(pageCount);

                //create element for publish date
                var year = document.createElement('p');
                year.innerHTML = '<b>Published Date:</b>' + ' ' +  book.items[i].volumeInfo.publishedDate;
                div.appendChild(year);

                //create element for publisher
                var publisher = document.createElement('p');
                publisher.innerHTML = '<b>Publisher:</b>' + ' ' +  book.items[i].volumeInfo.publisher;
                div.appendChild(publisher)

                //create element for description
                var description = document.createElement('p');
                description.innerHTML = book.items[i].volumeInfo.description;
                div.appendChild(description);

                //create a tag to target book link 
                var link = document.createElement('a');
                link.innerHTML = '<b>View more</b>';
                link.href = book.items[i].volumeInfo.previewLink;
                link.target = "_blank";
                div.appendChild(link);

                //Create hr to seperate evry book info
                var line = document.createElement('hr');

                //Make every elements as children element of bookResult
                bookResult.appendChild(WrapperDiv);
                bookResult.appendChild(line);

            }
            
        }
    })
}