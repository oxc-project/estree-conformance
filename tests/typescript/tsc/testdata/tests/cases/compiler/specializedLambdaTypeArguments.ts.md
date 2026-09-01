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
        "name": "X",
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 21
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 24,
                              "end": 28
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 24,
                            "end": 28
                          }
                        ],
                        "start": 23,
                        "end": 29
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 35,
                            "end": 39
                          },
                          "typeArguments": null,
                          "start": 35,
                          "end": 39
                        },
                        "start": 32,
                        "end": 39
                      },
                      "start": 23,
                      "end": 39
                    }
                  ],
                  "start": 21,
                  "end": 41
                },
                "start": 20,
                "end": 41
              },
              "start": 18,
              "end": 41
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 42
          }
        ],
        "start": 11,
        "end": 44
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 44
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
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 54,
                      "end": 61
                    }
                  ],
                  "start": 53,
                  "end": 62
                },
                "start": 52,
                "end": 62
              },
              "start": 50,
              "end": 62
            },
            "start": 49,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 62
        }
      ],
      "declare": false,
      "start": 45,
      "end": 63
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 65
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
    "value": "X",
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
    "value": "A",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 24,
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
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 32,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 54,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  }
]
```
