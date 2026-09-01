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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 19,
                        "end": 20
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 19,
                      "end": 20
                    }
                  ],
                  "start": 18,
                  "end": 21
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 29,
                          "end": 30
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 40,
                              "end": 41
                            },
                            "typeArguments": null,
                            "start": 40,
                            "end": 41
                          },
                          "start": 34,
                          "end": 41
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 44,
                                  "end": 45
                                },
                                "typeArguments": null,
                                "start": 44,
                                "end": 45
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 46,
                                  "end": 47
                                },
                                "typeArguments": null,
                                "start": 46,
                                "end": 47
                              },
                              "start": 44,
                              "end": 48
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 51,
                              "end": 57
                            }
                          ],
                          "start": 44,
                          "end": 57
                        },
                        "optional": false,
                        "readonly": null,
                        "start": 27,
                        "end": 58
                      },
                      "start": 25,
                      "end": 58
                    },
                    "start": 22,
                    "end": 58
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 66
                },
                "id": null,
                "generator": false,
                "start": 18,
                "end": 66
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "'0'",
                        "start": 69,
                        "end": 72
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 74,
                        "end": 75
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 69,
                      "end": 75
                    }
                  ],
                  "start": 68,
                  "end": 76
                }
              ],
              "optional": false,
              "start": 17,
              "end": 77
            },
            "definite": false,
            "start": 13,
            "end": 77
          }
        ],
        "declare": false,
        "start": 7,
        "end": 78
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 31,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  }
]
```
