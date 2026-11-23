__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 86
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 96
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 101,
                    "end": 103
                  },
                  "id": null,
                  "generator": false,
                  "start": 94,
                  "end": 103
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 91,
                "end": 103
              }
            ],
            "start": 89,
            "end": 105
          },
          "definite": false,
          "start": 79,
          "end": 105
        }
      ],
      "declare": false,
      "start": 73,
      "end": 106
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
            "name": "context",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "optional": false,
          "computed": false,
          "start": 108,
          "end": 117
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "content",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 200
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 209
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 202,
              "end": 209
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "content",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 221
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 233
                },
                "optional": false,
                "computed": false,
                "start": 214,
                "end": 233
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 214,
              "end": 235
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 242
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 249
              },
              "optional": false,
              "computed": false,
              "start": 238,
              "end": 249
            },
            "start": 214,
            "end": 249
          },
          "id": null,
          "generator": false,
          "start": 192,
          "end": 249
        },
        "start": 108,
        "end": 249
      },
      "directive": null,
      "start": 108,
      "end": 250
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "content",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 373
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "content",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 385
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 397
                },
                "optional": false,
                "computed": false,
                "start": 378,
                "end": 397
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 378,
              "end": 399
            },
            "id": null,
            "generator": false,
            "start": 365,
            "end": 399
          },
          "definite": false,
          "start": 310,
          "end": 399
        }
      ],
      "declare": false,
      "start": 304,
      "end": 400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 400
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 98,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 193,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 211,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 222,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 304,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 366,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 375,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 378,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 386,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  }
]
```
