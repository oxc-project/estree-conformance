__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumExample",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEST",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "initializer": {
              "type": "Literal",
              "value": "TEST",
              "raw": "'TEST'",
              "start": 30,
              "end": 36
            },
            "computed": false,
            "start": 23,
            "end": 36
          }
        ],
        "start": 17,
        "end": 39
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumExample",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 67
      },
      "exportKind": "value",
      "start": 41,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "EnumExample",
    "start": 5,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "TEST",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "'TEST'",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "export",
    "start": 41,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 48,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "EnumExample",
    "start": 56,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EnumExample",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./EnumExample",
        "raw": "'./EnumExample'",
        "start": 24,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumExample",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 75
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "TEST",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 80
              },
              "optional": false,
              "computed": false,
              "start": 64,
              "end": 80
            },
            "value": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 83,
              "end": 85
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 63,
            "end": 85
          }
        ],
        "start": 57,
        "end": 88
      },
      "exportKind": "value",
      "start": 42,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "EnumExample",
    "start": 7,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23
  },
  {
    "type": "String",
    "value": "'./EnumExample'",
    "start": 24,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 42,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 49,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "EnumExample",
    "start": 64,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "TEST",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  }
]
```
