function takeANumber(queue, customer){
  queue.push(customer);
  return `Welcome, ${customer}. You are number ${queue.length} in line.`
}
