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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 44
              },
              "optional": false,
              "computed": false,
              "start": 19,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 66
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 85
              },
              "optional": false,
              "computed": false,
              "start": 60,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 95
          }
        ],
        "start": 12,
        "end": 97
      },
      "declare": false,
      "start": 0,
      "end": 97
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
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
    "value": "I",
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
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 26,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 67,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  }
]
```
