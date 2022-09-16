import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  public freedomFighters:any[] = [
    'Mahatmagandhi',
    'sardar vallabhai patel',
    'Ram prasad Bismil',
    'Bal gangadhar Tilak',
    'Rani laxmi Bhai',
    'Bhagat singh',
    'Subash chnadra bosh',
    'Mangal pandey',
    'Jawaharlal nehru',
    'Sukhdev'
  ];
 

  public blogs: any[]=[
    {
      id:1,
      title:'Mahtmagandhi',
      description: 'Better known as the Mahatma, or great soul, Gandhi was an Indian lawyer who led his country to freedom from British colonial rule in 1947. He was assassinated months later at age 78. Gandhi is most famous for his philosophy of nonviolence that has inspired civil rights leaders around the world',
    },

    {
      id:2,
      title:'Sardar Vallabhbhai Patel',
      description:'Vallabhbhai Patel, in full Vallabhbhai Jhaverbhai Patel, byname Sardar Patel (Hindi: “Leader Patel”), (born October 31, 1875, Nadiad, Gujarat, India—died December 15, 1950, Bombay [now Mumbai]), Indian barrister and statesman, one of the leaders of the Indian National Congress during the struggle for Indian',
    },
    {
      id:3,
      title:'Ram Prasad Bismil',
      description:'Ram Prasad Bismil, Asafaqualla Khan, Roshan Singh were hanged to death for their involvement in Kakori Conspiracy case 1925 except Bhagat Singh. Bhagat Singh was also a nationalist and a younger freedom fighter but as per the question he was not involved in this case.',

    },
    {
      id:4,
      title:'Bal Gangadhar Tilak',
      description:'Rabindranath Tagore" gave the title of "Lokmanya" to "Balgangadhar Tilak". "Lokmanya" means "Beloved leader of the People',

    },
    {
      id:5,
      title:'Rani Lakshmi Bai',
      description:'Lakshmi Bai is remembered for her valour during the Indian Mutiny of 1857–58. During a siege of the fort of Jhansi, Bai offered stiff resistance to the invading forces and did not surrender even after her troops were overwhelmed. She was later killed in combat after having successfully assaulted Gwalio',

    },
    {
      id:6,
      title:'Bhagat Singh.',
      description:'Bhagat Singh was an Indian revolutionary freedom fighter who was hanged to death by British colonisers at the age of 23 years. Fondly known as haheed (martyr) Bhagat Singh, he is considered a national hero of Indias freedom struggle against colonial rule',

    },
    {
      id:7,
      title:'Subhash Chandra Bose',
      description:'Subhas Chandra Bose (also called Netaji) is known for his role in Indias independence movement. A participant of the noncooperation movement and a leader of the Indian National Congress he was part of the more militant wing and known for his advocacy of socialist policies',

    },
    {
      id:8,
      title:'Mangal Pandey',
      description:'Mangal Pandey is famous in Indian history as a freedom fighter who gave his life to free the country from the British raj. He played a key role in the revolt of 1857 also known a Sepoy mutiny of 1857. He is widely known in India as one of its first freedom fighters',

    },
    {
      id:9,
      title:'Jawaharlal Nehru',
      description:'Jawaharlal Nehru helped lead India to independence, which ended the British raj. As Indias first prime minister, he worked to make India an important member of the international community',

    },
    {
      id:10,
      title:'Sukhdev',
      description:'Sukhdev was a valiant revolutionary and an integral member of Hindustan Socialist Republican Association. He worked close with his associates Bhagat Singh and Shivram Rajguru. He was said to be involved in killing a British officer John Saunders',

    },
    {
      id:11,
      title:'Mahtmagandhi',
      description: 'Better known as the Mahatma, or great soul, Gandhi was an Indian lawyer who led his country to freedom from British colonial rule in 1947. He was assassinated months later at age 78. Gandhi is most famous for his philosophy of nonviolence that has inspired civil rights leaders around the world',
    },

    {
      id:12,
      title:'Sardar Vallabhbhai Patel',
      description:'Vallabhbhai Patel, in full Vallabhbhai Jhaverbhai Patel, byname Sardar Patel (Hindi: “Leader Patel”), (born October 31, 1875, Nadiad, Gujarat, India—died December 15, 1950, Bombay [now Mumbai]), Indian barrister and statesman, one of the leaders of the Indian National Congress during the struggle for Indian',
    },
    {
      id:13,
      title:'Ram Prasad Bismil',
      description:'Ram Prasad Bismil, Asafaqualla Khan, Roshan Singh were hanged to death for their involvement in Kakori Conspiracy case 1925 except Bhagat Singh. Bhagat Singh was also a nationalist and a younger freedom fighter but as per the question he was not involved in this case.',

    },
    {
      id:14,
      title:'Bal Gangadhar Tilak',
      description:'Rabindranath Tagore" gave the title of "Lokmanya" to "Balgangadhar Tilak". "Lokmanya" means "Beloved leader of the People',

    },
    {
      id:15,
      title:'Rani Lakshmi Bai',
      description:'Lakshmi Bai is remembered for her valour during the Indian Mutiny of 1857–58. During a siege of the fort of Jhansi, Bai offered stiff resistance to the invading forces and did not surrender even after her troops were overwhelmed. She was later killed in combat after having successfully assaulted Gwalio',

    },
    {
      id:16,
      title:'Bhagat Singh.',
      description:'Bhagat Singh was an Indian revolutionary freedom fighter who was hanged to death by British colonisers at the age of 23 years. Fondly known as haheed (martyr) Bhagat Singh, he is considered a national hero of Indias freedom struggle against colonial rule',

    },
    {
      id:17,
      title:'Subhash Chandra Bose',
      description:'Subhas Chandra Bose (also called Netaji) is known for his role in Indias independence movement. A participant of the noncooperation movement and a leader of the Indian National Congress he was part of the more militant wing and known for his advocacy of socialist policies',

    },
    {
      id:18,
      title:'Mangal Pandey',
      description:'Mangal Pandey is famous in Indian history as a freedom fighter who gave his life to free the country from the British raj. He played a key role in the revolt of 1857 also known a Sepoy mutiny of 1857. He is widely known in India as one of its first freedom fighters',

    },
    {
      id:19,
      title:'Jawaharlal Nehru',
      description:'Jawaharlal Nehru helped lead India to independence, which ended the British raj. As Indias first prime minister, he worked to make India an important member of the international community',

    },
    {
      id:20,
      title:'Sukhdev',
      description:'Sukhdev was a valiant revolutionary and an integral member of Hindustan Socialist Republican Association. He worked close with his associates Bhagat Singh and Shivram Rajguru. He was said to be involved in killing a British officer John Saunders',

    },
    

  ]
}
