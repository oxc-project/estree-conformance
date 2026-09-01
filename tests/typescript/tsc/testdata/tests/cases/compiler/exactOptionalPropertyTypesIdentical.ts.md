__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 15,
                          "end": 16
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 15,
                        "end": 16
                      }
                    ],
                    "start": 14,
                    "end": 17
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 23,
                          "end": 24
                        },
                        "typeArguments": null,
                        "start": 23,
                        "end": 24
                      },
                      "extendsType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 34,
                              "end": 35
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 38,
                                "end": 44
                              },
                              "start": 36,
                              "end": 44
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 34,
                            "end": 44
                          }
                        ],
                        "start": 33,
                        "end": 45
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 48,
                          "end": 49
                        },
                        "start": 48,
                        "end": 49
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 52,
                          "end": 53
                        },
                        "start": 52,
                        "end": 53
                      },
                      "start": 23,
                      "end": 53
                    },
                    "start": 20,
                    "end": 53
                  },
                  "start": 14,
                  "end": 53
                },
                "start": 12,
                "end": 53
              },
              "start": 11,
              "end": 53
            },
            "init": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 56,
                "end": 60
              },
              "start": 56,
              "end": 61
            },
            "definite": false,
            "start": 11,
            "end": 61
          }
        ],
        "declare": false,
        "start": 7,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 62
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 78,
                          "end": 79
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 78,
                        "end": 79
                      }
                    ],
                    "start": 77,
                    "end": 80
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 87
                        },
                        "typeArguments": null,
                        "start": 86,
                        "end": 87
                      },
                      "extendsType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 97,
                              "end": 98
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 101,
                                    "end": 107
                                  },
                                  {
                                    "type": "TSUndefinedKeyword",
                                    "start": 110,
                                    "end": 119
                                  }
                                ],
                                "start": 101,
                                "end": 119
                              },
                              "start": 99,
                              "end": 119
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 97,
                            "end": 119
                          }
                        ],
                        "start": 96,
                        "end": 120
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 123,
                          "end": 124
                        },
                        "start": 123,
                        "end": 124
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 127,
                          "end": 128
                        },
                        "start": 127,
                        "end": 128
                      },
                      "start": 86,
                      "end": 128
                    },
                    "start": 83,
                    "end": 128
                  },
                  "start": 77,
                  "end": 128
                },
                "start": 75,
                "end": 128
              },
              "start": 74,
              "end": 128
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "definite": false,
            "start": 74,
            "end": 132
          }
        ],
        "declare": false,
        "start": 70,
        "end": 133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 63,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
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
    "value": "let",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 20,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Null",
    "value": "null",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 63,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 83,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 110,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 121,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  }
]
```
