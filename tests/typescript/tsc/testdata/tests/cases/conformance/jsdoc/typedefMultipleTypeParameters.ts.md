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
            "name": "tuvwx",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 364
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 364
        }
      ],
      "declare": false,
      "start": 355,
      "end": 365
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
            "name": "wrong",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 461
          },
          "init": null,
          "definite": false,
          "start": 456,
          "end": 461
        }
      ],
      "declare": false,
      "start": 452,
      "end": 462
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
            "name": "insufficient",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 522
          },
          "init": null,
          "definite": false,
          "start": 510,
          "end": 522
        }
      ],
      "declare": false,
      "start": 506,
      "end": 523
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 355,
  "end": 524
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "tuvwx",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 452,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "insufficient",
    "start": 510,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  }
]
```
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
            "name": "actually",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Everything",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 32
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 35,
                            "end": 36
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 38,
                              "end": 44
                            },
                            "start": 36,
                            "end": 44
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 35,
                          "end": 44
                        }
                      ],
                      "start": 33,
                      "end": 47
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 49,
                      "end": 58
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 62,
                            "end": 63
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 65,
                                "end": 66
                              },
                              "start": 65,
                              "end": 66
                            },
                            "start": 63,
                            "end": 66
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 62,
                          "end": 67
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 68,
                            "end": 69
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 71,
                                "end": 72
                              },
                              "start": 71,
                              "end": 72
                            },
                            "start": 69,
                            "end": 72
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 68,
                          "end": 72
                        }
                      ],
                      "start": 60,
                      "end": 74
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 76,
                      "end": 82
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 84,
                      "end": 90
                    }
                  ],
                  "start": 32,
                  "end": 91
                },
                "start": 22,
                "end": 91
              },
              "start": 20,
              "end": 91
            },
            "start": 12,
            "end": 91
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 91
        }
      ],
      "declare": true,
      "start": 0,
      "end": 92
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 92
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "actually",
    "start": 12,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Everything",
    "start": 22,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
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
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 49,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "type": "Numeric",
    "value": "1",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  }
]
```
