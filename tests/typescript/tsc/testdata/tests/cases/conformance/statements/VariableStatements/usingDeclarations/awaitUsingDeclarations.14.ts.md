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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 44
                    },
                    "init": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 47,
                      "end": 51
                    },
                    "definite": false,
                    "start": 43,
                    "end": 51
                  }
                ],
                "declare": false,
                "start": 31,
                "end": 52
              },
              {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "await using",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 88
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 91,
                          "end": 95
                        },
                        "definite": false,
                        "start": 87,
                        "end": 95
                      }
                    ],
                    "declare": false,
                    "start": 75,
                    "end": 96
                  }
                ],
                "start": 61,
                "end": 106
              }
            ],
            "start": 14,
            "end": 112
          }
        ],
        "start": 8,
        "end": 114
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 114
    }
  ],
  "sourceType": "script",
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
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 37,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Null",
    "value": "null",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Null",
    "value": "null",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  }
]
```
