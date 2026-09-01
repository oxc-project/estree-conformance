__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 88
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bigOak",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 95
                    },
                    "optional": false,
                    "computed": false,
                    "start": 81,
                    "end": 95
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 98,
                    "end": 99
                  },
                  "start": 81,
                  "end": 99
                },
                "directive": null,
                "start": 81,
                "end": 99
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 107
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "everywhere",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 118
                    },
                    "optional": false,
                    "computed": false,
                    "start": 100,
                    "end": 118
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 121,
                    "end": 122
                  },
                  "start": 100,
                  "end": 122
                },
                "directive": null,
                "start": 100,
                "end": 122
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 129
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 137
                    },
                    "optional": false,
                    "computed": false,
                    "start": 123,
                    "end": 137
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exports",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 147
                  },
                  "start": 123,
                  "end": 147
                },
                "directive": null,
                "start": 123,
                "end": 147
              }
            ],
            "start": 79,
            "end": 149
          },
          "expression": false,
          "start": 68,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 67,
        "end": 152
      },
      "directive": null,
      "start": 67,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 152
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "bigOak",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "everywhere",
    "start": 108,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 130,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  }
]
```
