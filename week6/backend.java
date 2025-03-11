import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/billing")
public class BillingController {
    private final List<Item> items = new ArrayList<>();

    @PostMapping("/add")
    public String addItem(@RequestBody Item item) {
        items.add(item);
        return "Item added!";
    }

    @GetMapping("/total")
    public double getTotal() {
        return items.stream().mapToDouble(i -> i.getPrice() * i.getQuantity()).sum();
    }
}

class Item {
    private String name;
    private double price;
    private int quantity;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }
}
