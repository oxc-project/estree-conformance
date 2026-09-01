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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 17
      },
      "typeParameters": null,
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
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
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
            "start": 24,
            "end": 34
          }
        ],
        "start": 18,
        "end": 36
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 54
      },
      "typeParameters": null,
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
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
            "start": 61,
            "end": 71
          }
        ],
        "start": 55,
        "end": 73
      },
      "abstract": false,
      "declare": true,
      "start": 37,
      "end": 73
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 86
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 92
            },
            "typeArguments": null,
            "start": 89,
            "end": 92
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 98
            },
            "typeArguments": null,
            "start": 95,
            "end": 98
          }
        ],
        "start": 89,
        "end": 98
      },
      "declare": false,
      "start": 74,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 109
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 128
          },
          "typeArguments": null,
          "start": 121,
          "end": 128
        }
      ],
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
              "start": 135,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 138,
                "end": 144
              },
              "start": 136,
              "end": 144
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
            "start": 135,
            "end": 145
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              },
              "start": 151,
              "end": 159
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
            "start": 150,
            "end": 160
          }
        ],
        "start": 129,
        "end": 162
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 162
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 162
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 74,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 106,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 110,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  }
]
```
