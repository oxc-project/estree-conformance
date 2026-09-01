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
                  "start": 23,
                  "end": 24
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 25,
                        "end": 26
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 27,
                              "end": 28
                            },
                            "typeArguments": null,
                            "start": 27,
                            "end": 28
                          }
                        ],
                        "start": 26,
                        "end": 29
                      },
                      "start": 25,
                      "end": 29
                    }
                  ],
                  "start": 24,
                  "end": 30
                },
                "start": 23,
                "end": 30
              },
              "start": 21,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          }
        ],
        "start": 15,
        "end": 32
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
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
              "start": 46,
              "end": 47
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 46,
            "end": 47
          }
        ],
        "start": 45,
        "end": 48
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 60
                },
                "typeArguments": null,
                "start": 59,
                "end": 60
              }
            ],
            "start": 58,
            "end": 61
          },
          "start": 57,
          "end": 61
        }
      ],
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
              "start": 76,
              "end": 77
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
                  "start": 79,
                  "end": 80
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 83,
                              "end": 84
                            },
                            "typeArguments": null,
                            "start": 83,
                            "end": 84
                          }
                        ],
                        "start": 82,
                        "end": 85
                      },
                      "start": 81,
                      "end": 85
                    }
                  ],
                  "start": 80,
                  "end": 86
                },
                "start": 79,
                "end": 86
              },
              "start": 77,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 86
          }
        ],
        "start": 71,
        "end": 88
      },
      "declare": false,
      "start": 34,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
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
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 49,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
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
    "value": "T",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  }
]
```
