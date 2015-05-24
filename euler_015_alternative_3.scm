(define traverseGrid
  (lambda (x y len)
    (cond
      ((or (> x len) (> y len)) 0)
      ((and (eq? x len) (eq? y len)) 1)
      (else
        (+ (traverseGrid (+ x 1) y len) (traverseGrid x (+ y 1) len))))))
