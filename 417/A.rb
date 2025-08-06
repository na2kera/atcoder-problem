require 'stringio'

input_data = <<~INPUT
  20 4 8
  abcdefghijklmnopqrst

INPUT

$stdin = StringIO.new(input_data)

N, A, B = gets.split.map(&:to_i)
S = gets

string = S.slice(A, N - A - B)

puts string
