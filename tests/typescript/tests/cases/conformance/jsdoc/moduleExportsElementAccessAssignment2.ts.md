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
            "name": "GlobalThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 54
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 60
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 62,
                  "end": 64
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 59,
                "end": 64
              }
            ],
            "start": 57,
            "end": 66
          },
          "definite": false,
          "start": 43,
          "end": 66
        }
      ],
      "declare": false,
      "start": 39,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 148
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 153
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 159
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 168
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 194
                },
                "prefix": true,
                "start": 180,
                "end": 194
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 199,
                "end": 210
              },
              "start": 180,
              "end": 210
            },
            "consequent": {
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
                        "start": 222,
                        "end": 229
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "AST_",
                          "raw": "\"AST_\"",
                          "start": 230,
                          "end": 236
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 243
                        },
                        "start": 230,
                        "end": 243
                      },
                      "optional": false,
                      "computed": true,
                      "start": 222,
                      "end": 244
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ctor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 251
                    },
                    "start": 222,
                    "end": 251
                  },
                  "directive": null,
                  "start": 222,
                  "end": 252
                }
              ],
              "start": 212,
              "end": 258
            },
            "alternate": null,
            "start": 176,
            "end": 258
          }
        ],
        "start": 170,
        "end": 260
      },
      "expression": false,
      "start": 138,
      "end": 260
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 261
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 39,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "GlobalThing",
    "start": 43,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 180,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 195,
    "end": 198
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 199,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"AST_\"",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "GlobalThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 11
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "optional": false,
        "computed": false,
        "start": 0,
        "end": 13
      },
      "directive": null,
      "start": 0,
      "end": 13
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 13
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "GlobalThing",
    "start": 0,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  }
]
```
