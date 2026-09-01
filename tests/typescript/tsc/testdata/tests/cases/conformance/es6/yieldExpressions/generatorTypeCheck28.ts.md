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
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 31
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      },
                      "start": 34,
                      "end": 42
                    },
                    "start": 33,
                    "end": 42
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  },
                  "start": 44,
                  "end": 53
                },
                "start": 32,
                "end": 53
              }
            ],
            "start": 31,
            "end": 54
          },
          "start": 15,
          "end": 54
        },
        "start": 13,
        "end": 54
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 87
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 96
                      },
                      "optional": false,
                      "computed": false,
                      "start": 81,
                      "end": 96
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": true,
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
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 120,
                                    "end": 121
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 125,
                                    "end": 126
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 127,
                                    "end": 133
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 125,
                                  "end": 133
                                },
                                "id": null,
                                "generator": false,
                                "start": 120,
                                "end": 133
                              },
                              "start": 114,
                              "end": 133
                            },
                            "directive": null,
                            "start": 114,
                            "end": 134
                          }
                        ],
                        "start": 100,
                        "end": 144
                      },
                      "expression": false,
                      "start": 97,
                      "end": 144
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 79,
                    "end": 144
                  }
                ],
                "start": 69,
                "end": 150
              },
              "start": 61,
              "end": 150
            },
            "directive": null,
            "start": 61,
            "end": 151
          }
        ],
        "start": 55,
        "end": 153
      },
      "expression": false,
      "start": 0,
      "end": 153
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 153
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
    "type": "Punctuator",
    "value": "*",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 15,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
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
    "value": "=>",
    "start": 44,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "*",
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
    "type": "Punctuator",
    "value": "*",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 88,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 122,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  }
]
```
