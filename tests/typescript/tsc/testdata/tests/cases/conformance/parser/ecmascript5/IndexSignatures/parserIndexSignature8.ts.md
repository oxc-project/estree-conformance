__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 19,
                            "end": 22
                          },
                          "start": 17,
                          "end": 22
                        },
                        "start": 12,
                        "end": 22
                      }
                    ],
                    "typeAnnotation": null,
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 11,
                    "end": 24
                  }
                ],
                "start": 9,
                "end": 26
              },
              "start": 7,
              "end": 26
            },
            "start": 4,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RegExp",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 72,
                              "end": 78
                            },
                            "typeArguments": null,
                            "start": 72,
                            "end": 78
                          },
                          "start": 70,
                          "end": 78
                        },
                        "start": 65,
                        "end": 78
                      }
                    ],
                    "typeAnnotation": null,
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 64,
                    "end": 80
                  }
                ],
                "start": 62,
                "end": 82
              },
              "start": 60,
              "end": 82
            },
            "start": 56,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 82
        }
      ],
      "declare": false,
      "start": 52,
      "end": 83
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "var",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "]",
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
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  }
]
```
