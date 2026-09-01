__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 66
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
                  "name": "subFun",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Collection",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 84,
                              "end": 94
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 84,
                            "end": 94
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Field",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 96,
                              "end": 101
                            },
                            "constraint": {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Collection",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 116,
                                  "end": 126
                                },
                                "typeArguments": null,
                                "start": 116,
                                "end": 126
                              },
                              "start": 110,
                              "end": 126
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 96,
                            "end": 126
                          }
                        ],
                        "start": 83,
                        "end": 127
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FlatArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 150
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Collection",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 151,
                                      "end": 161
                                    },
                                    "typeArguments": null,
                                    "start": 151,
                                    "end": 161
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Field",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 162,
                                      "end": 167
                                    },
                                    "typeArguments": null,
                                    "start": 162,
                                    "end": 167
                                  },
                                  "start": 151,
                                  "end": 168
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 170,
                                    "end": 171
                                  },
                                  "start": 170,
                                  "end": 171
                                }
                              ],
                              "start": 150,
                              "end": 172
                            },
                            "start": 141,
                            "end": 172
                          },
                          "start": 141,
                          "end": 174
                        },
                        "start": 138,
                        "end": 174
                      },
                      "start": 83,
                      "end": 174
                    },
                    "start": 81,
                    "end": 174
                  },
                  "start": 75,
                  "end": 174
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 179,
                "end": 182
              },
              "id": null,
              "generator": false,
              "start": 69,
              "end": 182
            },
            "definite": false,
            "start": 63,
            "end": 182
          }
        ],
        "declare": false,
        "start": 57,
        "end": 183
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 183
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 50,
  "end": 183
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "subFun",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 84,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 96,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 102,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 116,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 138,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "FlatArray",
    "start": 141,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 151,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  }
]
```
