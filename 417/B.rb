require 'stringio'

input_data = <<~INPUT
  1 2
  1
  1 1

INPUT

$stdin = StringIO.new(input_data)

gets.split.map(&:to_i)
a = gets.split.map(&:to_i)
b = gets.split.map(&:to_i)
b.each do |bb|
  a.delete_at(a.index(bb)) if a.include?(bb)
end

puts a.join(' ')
