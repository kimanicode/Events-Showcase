import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/events", () => {
      return {
        "events": [
            {
              "id": 1,
              "event_name": "New Product Launch",
              "event_date": "2023-05-18",
              "event_time": "10:00 AM",
              "event_location": "123 Main Street, Anytown, CA 91234",
              "event_description": "We are excited to announce the launch of our new product! Join us for a free event to learn more about the product and how it can benefit you.",
              "event_image":"https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_960_720.jpg"
            },
            {
              "id": 2,
              "event_name": "Customer Appreciation Event",
              "event_date": "2023-06-01",
              "event_time": "6:00 PM",
              "event_location": "456 Elm Street, Anytown, CA 91234",
              "event_description": "We want to thank our customers for their continued support! Join us for a fun-filled evening of food, drinks, and entertainment.",
              "event_image":"https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_960_720.jpg"
            },
            {
              "id": 3,
              "event_name": "Conference on Innovation",
              "event_date": "2023-07-15",
              "event_time": "9:00 AM",
              "event_location": "789 Oak Avenue, Anytown, CA 91234",
              "event_description": "Join industry leaders and experts at our conference to explore the latest trends and advancements in innovation.",
              "event_image": "https://cdn.pixabay.com/photo/2016/11/18/17/47/iphone-1836071_960_720.jpg"
            },
            {
              "id": 4,
              "event_name": "Charity Gala Dinner",
              "event_date": "2023-08-10",
              "event_time": "7:30 PM",
              "event_location": "555 Pine Street, Anytown, CA 91234",
              "event_description": "Support a good cause and enjoy an elegant evening of fine dining, entertainment, and charity auctions.",
              "event_image":"https://cdn.pixabay.com/photo/2023/05/19/04/22/beach-8003636_960_720.jpg"
            }
          ],
      }
    })
  },
})