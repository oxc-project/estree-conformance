__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 15,
                    "end": 17
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 20,
                    "end": 22
                  },
                  "start": 15,
                  "end": 22
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 25,
                  "end": 26
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 14,
                "end": 26
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 33,
                    "end": 35
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 38,
                    "end": 40
                  },
                  "start": 33,
                  "end": 40
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 44,
                    "end": 47
                  },
                  "expression": false,
                  "start": 41,
                  "end": 47
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 32,
                "end": 47
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 58,
                    "end": 60
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 63,
                    "end": 65
                  },
                  "start": 58,
                  "end": 65
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 78,
                          "end": 79
                        },
                        "start": 71,
                        "end": 80
                      }
                    ],
                    "start": 69,
                    "end": 82
                  },
                  "expression": false,
                  "start": 66,
                  "end": 82
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 53,
                "end": 82
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 93,
                    "end": 95
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 98,
                    "end": 100
                  },
                  "start": 93,
                  "end": 100
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 103
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 105,
                    "end": 108
                  },
                  "expression": false,
                  "start": 101,
                  "end": 108
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 88,
                "end": 108
              }
            ],
            "start": 8,
            "end": 110
          },
          "definite": false,
          "start": 4,
          "end": 110
        }
      ],
      "declare": false,
      "start": 0,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 20,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 61,
    "end": 62
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 71,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  }
]
```
