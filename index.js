function takeANumber(queue, customer){
  queue.push(customer)
  return `Welcome, ${customer}. You are number ${queue.lenght} in line.`
}
