__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "ThisExpression",
                          "start": 37,
                          "end": 41
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 42,
                          "end": 44
                        },
                        "start": 37,
                        "end": 44
                      },
                      "typeArguments": null,
                      "start": 30,
                      "end": 44
                    },
                    "start": 28,
                    "end": 44
                  },
                  "start": 27,
                  "end": 44
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 47,
                  "end": 48
                },
                "definite": false,
                "start": 27,
                "end": 48
              }
            ],
            "declare": false,
            "start": 23,
            "end": 48
          }
        ],
        "start": 17,
        "end": 50
      },
      "expression": false,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  }
]
```
