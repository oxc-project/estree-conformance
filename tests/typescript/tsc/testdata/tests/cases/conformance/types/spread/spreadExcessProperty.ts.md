__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 11,
              "end": 12
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 21
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 31
          }
        ],
        "start": 9,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "extra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 47
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 55,
                  "end": 58
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 52,
                "end": 58
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 63,
                  "end": 66
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 66
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 73
                },
                "value": {
                  "type": "Literal",
                  "value": "extra",
                  "raw": "\"extra\"",
                  "start": 75,
                  "end": 82
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 68,
                "end": 82
              }
            ],
            "start": 50,
            "end": 84
          },
          "definite": false,
          "start": 41,
          "end": 84
        }
      ],
      "declare": false,
      "start": 35,
      "end": 85
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
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
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 96,
                "end": 97
              },
              "start": 94,
              "end": 97
            },
            "start": 92,
            "end": 97
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extra1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 111
                },
                "start": 102,
                "end": 111
              }
            ],
            "start": 100,
            "end": 113
          },
          "definite": false,
          "start": 92,
          "end": 113
        }
      ],
      "declare": false,
      "start": 86,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 163
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "string",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "extra1",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 63,
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
    "value": "extra",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"extra\"",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "extra1",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  }
]
```
