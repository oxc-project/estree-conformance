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
            "name": "cache",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 60
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 70
            },
            "typeArguments": null,
            "arguments": [],
            "start": 63,
            "end": 72
          },
          "definite": false,
          "start": 55,
          "end": 72
        }
      ],
      "declare": false,
      "start": 49,
      "end": 72
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
            "name": "getStringGetter",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 153
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 160
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cache",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 218,
                                "end": 223
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 224,
                                "end": 227
                              },
                              "optional": false,
                              "computed": false,
                              "start": 218,
                              "end": 227
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 228,
                                "end": 231
                              }
                            ],
                            "optional": false,
                            "start": 218,
                            "end": 232
                          },
                          "start": 188,
                          "end": 233
                        }
                      ],
                      "start": 182,
                      "end": 237
                    },
                    "id": null,
                    "generator": false,
                    "start": 176,
                    "end": 237
                  },
                  "start": 169,
                  "end": 237
                }
              ],
              "start": 165,
              "end": 239
            },
            "id": null,
            "generator": false,
            "start": 156,
            "end": 239
          },
          "definite": false,
          "start": 138,
          "end": 239
        }
      ],
      "declare": false,
      "start": 132,
      "end": 239
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 49,
  "end": 239
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "cache",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "getStringGetter",
    "start": 138,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "cache",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  }
]
```
