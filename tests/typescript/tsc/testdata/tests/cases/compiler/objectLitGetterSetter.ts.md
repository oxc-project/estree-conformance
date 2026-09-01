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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 19
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 22,
            "end": 24
          },
          "definite": false,
          "start": 16,
          "end": 24
        }
      ],
      "declare": false,
      "start": 12,
      "end": 25
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 44
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 59
          },
          "optional": false,
          "computed": false,
          "start": 38,
          "end": 59
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          {
            "type": "Literal",
            "value": "accProperty",
            "raw": "\"accProperty\"",
            "start": 65,
            "end": 78
          },
          {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 99
              },
              "typeArguments": null,
              "start": 81,
              "end": 99
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 122
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "eval",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 158,
                              "end": 162
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "public = 1;",
                                "raw": "\"public = 1;\"",
                                "start": 163,
                                "end": 176
                              }
                            ],
                            "optional": false,
                            "start": 158,
                            "end": 177
                          },
                          "directive": null,
                          "start": 158,
                          "end": 178
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 11,
                            "raw": "11",
                            "start": 206,
                            "end": 208
                          },
                          "start": 199,
                          "end": 209
                        }
                      ],
                      "start": 136,
                      "end": 227
                    },
                    "expression": false,
                    "start": 124,
                    "end": 227
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 119,
                  "end": 227
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 248
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 261
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 263,
                      "end": 282
                    },
                    "expression": false,
                    "start": 250,
                    "end": 282
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 245,
                  "end": 282
                }
              ],
              "start": 101,
              "end": 296
            },
            "start": 80,
            "end": 297
          }
        ],
        "optional": false,
        "start": 38,
        "end": 298
      },
      "directive": null,
      "start": 38,
      "end": 298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 298
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 12,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 45,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"accProperty\"",
    "start": 65,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "PropertyDescriptor",
    "start": 81,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "eval",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "\"public = 1;\"",
    "start": 163,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 199,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 250,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  }
]
```
