__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 25
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 30,
                            "end": 31
                          },
                          "typeArguments": null,
                          "start": 30,
                          "end": 31
                        },
                        "start": 28,
                        "end": 31
                      },
                      "start": 26,
                      "end": 31
                    }
                  ],
                  "start": 25,
                  "end": 32
                },
                "start": 24,
                "end": 32
              },
              "start": 22,
              "end": 32
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 32
          }
        ],
        "start": 15,
        "end": 34
      },
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 48
      },
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
              "start": 49,
              "end": 50
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 49,
            "end": 50
          }
        ],
        "start": 48,
        "end": 51
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 67,
                            "end": 68
                          },
                          "typeArguments": null,
                          "start": 67,
                          "end": 68
                        },
                        "start": 65,
                        "end": 68
                      },
                      "start": 63,
                      "end": 68
                    }
                  ],
                  "start": 62,
                  "end": 69
                },
                "start": 61,
                "end": 69
              },
              "start": 59,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 69
          }
        ],
        "start": 52,
        "end": 71
      },
      "declare": false,
      "start": 37,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 82
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 83,
                      "end": 89
                    }
                  ],
                  "start": 82,
                  "end": 90
                },
                "start": 81,
                "end": 90
              },
              "start": 79,
              "end": 90
            },
            "start": 78,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 78,
          "end": 90
        }
      ],
      "declare": false,
      "start": 74,
      "end": 90
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 100,
                      "end": 106
                    }
                  ],
                  "start": 99,
                  "end": 107
                },
                "start": 98,
                "end": 107
              },
              "start": 96,
              "end": 107
            },
            "start": 95,
            "end": 107
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "definite": false,
          "start": 95,
          "end": 111
        }
      ],
      "declare": false,
      "start": 91,
      "end": 111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 111
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 37,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 110,
    "end": 111
  }
]
```
