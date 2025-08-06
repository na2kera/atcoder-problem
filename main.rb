require 'stringio'

input_data = <<~INPUT
7 1 3
atcoder

INPUT

$stdin = StringIO.new(input_data)


N= gets.chomp
A=gets.chomp
puts N, A