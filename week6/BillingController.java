package com.example.billing;

import org.springframework.web.bind.annotation.*;
import javax.xml.bind.*;
import java.io.File;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class BillingController {

    @GetMapping("/items")
    public List<Item> getItems() throws Exception {
        File file = new File("src/main/resources/stationery_items.xml");
        JAXBContext jaxbContext = JAXBContext.newInstance(Stationery.class);
        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
        Stationery stationery = (Stationery) jaxbUnmarshaller.unmarshal(file);
        return stationery.getItems();
    }

    @PostMapping("/total")
    public double calculateTotal(@RequestBody List<Item> cart) {
        return cart.stream().mapToDouble(item -> item.getPrice() * item.getQuantity()).sum();
    }
}

@XmlRootElement(name = "stationery")
class Stationery {
    private List<Item> items;

    @XmlElement(name = "item")
    public List<Item> getItems() { return items; }

    public void setItems(List<Item> items) { this.items = items; }
}

@XmlRootElement(name = "item")
class Item {
    private int id;
    private String name;
    private double price;
    private int stock;
    private int quantity;

    public int getId() { return id; }
    @XmlElement
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    @XmlElement
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    @XmlElement
    public void setPrice(double price) { this.price = price; }

    public int getStock() { return stock; }
    @XmlElement
    public void setStock(int stock) { this.stock = stock; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }
}
