require 'faker'
# Ticket.destroy_all
# Rental.destroy_all
# Admin.destroy_all
# Employee.destroy_all
# Inventory.destroy_all

# Admin.create(name:"Alen", manager: true)
# Employee.create(name:"Bob")
# Inventory.create(name:"MacBook Pro 2015", serial_number: 791234, rent: true, cpu: "2.2 Ghz Quad-Core Intel Core i7", memory: "16 GB", graphic_card:"Intel Iris Pro")
# Inventory.create(name:"MacBook Pro 2015", serial_number: 454664, rent: true, cpu: "2.2 Ghz Quad-Core Intel Core i7", memory: "16 GB", graphic_card:"Intel Iris Pro")
# Inventory.create(name:"MacBook Pro 2015", serial_number: 456845, rent: true, cpu: "2.2 Ghz Quad-Core Intel Core i7", memory: "16 GB", graphic_card:"Intel Iris Pro")
# Inventory.create(name:"MacBook Pro 2015", serial_number: 178284, rent: true, cpu: "2.2 Ghz Quad-Core Intel Core i7", memory: "16 GB", graphic_card:"Intel Iris Pro")
# Inventory.create(name:"MacBook Pro 2015", serial_number: 123794, rent: true, cpu: "2.2 Ghz Quad-Core Intel Core i7", memory: "16 GB", graphic_card:"Intel Iris Pro")
# Rental.create(employee_id: Employee.all.sample.id, inventory_id: Inventory.all.sample.id)
# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "screen broken", level: "Critical", issue:"laptop screen fell and broke can't do work", complete: false, solution: "", severity_level: 3)
# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "internet not connecting", level: "Low", issue:"My internet stopped working, but it connects on my phone",complete: false, solution: "", severity_level: 1)
# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "Locked out of email", level: "Moderate", issue:"My email password and recovery is not working", complete: false, solution: "", severity_level: 2)
# Ticket.create(admin_id: Admin.all.sample.id, rental_id: Rental.all.sample.id, employee_id: Employee.all.sample.id, subject: "HDMI cable ripped", level: "Low", issue:"I accidentally cut my HDMI cable now I can't use my second monitor",complete: false, solution: "", severity_level: 1)
# Ticket.first.update(case_number: Faker::Number.number(digits: 10))
# Employee.update(department: "Engineering", position: "Lead Software Developer", email: "bob@email.com", extension: 711)

20.times do 
Rental.create(employee_id: Employee.all.sample.id, inventory_id: Inventory.all.sample.id)

end