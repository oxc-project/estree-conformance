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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
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
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 23
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
                        "start": 24,
                        "end": 25
                      },
                      "typeArguments": null,
                      "start": 24,
                      "end": 25
                    }
                  ],
                  "start": 23,
                  "end": 26
                },
                "start": 21,
                "end": 26
              },
              "start": 19,
              "end": 26
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
            "start": 18,
            "end": 27
          }
        ],
        "start": 12,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 39
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
              "start": 40,
              "end": 41
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 41
          }
        ],
        "start": 39,
        "end": 42
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 53
      },
      "superTypeArguments": {
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
              "start": 54,
              "end": 55
            },
            "typeArguments": null,
            "start": 54,
            "end": 55
          }
        ],
        "start": 53,
        "end": 56
      },
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
              "start": 63,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
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
            "start": 63,
            "end": 72
          }
        ],
        "start": 57,
        "end": 74
      },
      "abstract": false,
      "declare": false,
      "start": 31,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
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
    "value": "C1",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 43,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 51,
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
    "value": "T",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  }
]
```
