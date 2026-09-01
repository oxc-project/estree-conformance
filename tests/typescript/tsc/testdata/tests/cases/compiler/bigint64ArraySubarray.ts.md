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
        "name": "bigInt64ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 30
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 46
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 66
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 67,
                      "end": 69
                    }
                  ],
                  "start": 49,
                  "end": 70
                },
                "definite": false,
                "start": 43,
                "end": 70
              }
            ],
            "declare": false,
            "start": 39,
            "end": 71
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 79
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 88
                },
                "optional": false,
                "computed": false,
                "start": 76,
                "end": 88
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 76,
              "end": 90
            },
            "directive": null,
            "start": 76,
            "end": 91
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 99
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 108
                },
                "optional": false,
                "computed": false,
                "start": 96,
                "end": 108
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 109,
                  "end": 110
                }
              ],
              "optional": false,
              "start": 96,
              "end": 111
            },
            "directive": null,
            "start": 96,
            "end": 112
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 120
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 129
                },
                "optional": false,
                "computed": false,
                "start": 117,
                "end": 129
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 130,
                  "end": 131
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 133,
                  "end": 135
                }
              ],
              "optional": false,
              "start": 117,
              "end": 136
            },
            "directive": null,
            "start": 117,
            "end": 137
          }
        ],
        "start": 33,
        "end": 139
      },
      "expression": false,
      "start": 0,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
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
    "value": "bigInt64ArraySubarray",
    "start": 9,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 39,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 53,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 80,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 100,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 121,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  }
]
```
