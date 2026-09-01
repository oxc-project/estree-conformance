__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 13
          }
        ],
        "start": 7,
        "end": 14
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dummy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 36
                },
                "typeArguments": null,
                "start": 31,
                "end": 36
              },
              "start": 29,
              "end": 36
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 21,
            "end": 37
          }
        ],
        "start": 15,
        "end": 39
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 39
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 59,
                            "end": 60
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 59,
                          "end": 60
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 62,
                            "end": 63
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 62,
                          "end": 63
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 65,
                            "end": 66
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 65,
                          "end": 66
                        }
                      ],
                      "start": 58,
                      "end": 67
                    },
                    "params": [
                      {
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 71,
                              "end": 72
                            },
                            "typeArguments": null,
                            "start": 71,
                            "end": 72
                          },
                          "start": 69,
                          "end": 72
                        },
                        "start": 68,
                        "end": 72
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 75,
                          "end": 76
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 77,
                                "end": 78
                              },
                              "typeArguments": null,
                              "start": 77,
                              "end": 78
                            }
                          ],
                          "start": 76,
                          "end": 79
                        },
                        "start": 75,
                        "end": 79
                      },
                      "start": 73,
                      "end": 79
                    },
                    "start": 54,
                    "end": 80
                  }
                ],
                "start": 48,
                "end": 82
              },
              "start": 46,
              "end": 82
            },
            "start": 45,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 82
        }
      ],
      "declare": false,
      "start": 41,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Dummy",
    "start": 8,
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
    "type": "Keyword",
    "value": "public",
    "start": 21,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Dummy",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 54,
    "end": 57
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
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "a",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  }
]
```
