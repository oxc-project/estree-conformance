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
        "name": "ISomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 39
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "accessibility": null,
            "static": false,
            "start": 44,
            "end": 55
          }
        ],
        "start": 21,
        "end": 57
      },
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 74
        },
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 80
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 80
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 77,
              "end": 80
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 85
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 85
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 82,
              "end": 85
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ISomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 98
              },
              "typeArguments": null,
              "start": 88,
              "end": 98
            },
            "start": 86,
            "end": 98
          },
          "start": 76,
          "end": 98
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 100,
        "end": 102
      },
      "expression": false,
      "start": 59,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 116
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 119
        },
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 125
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 125
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 122,
              "end": 125
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 127,
              "end": 130
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ISomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 143
              },
              "typeArguments": null,
              "start": 133,
              "end": 143
            },
            "start": 131,
            "end": 143
          },
          "start": 121,
          "end": 143
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 145,
        "end": 147
      },
      "expression": false,
      "start": 104,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "one",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 161
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 164
        },
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 168
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 170,
        "end": 172
      },
      "expression": false,
      "start": 149,
      "end": 172
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "two",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 186
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 189
        },
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "start": 202,
              "end": 210
            },
            "start": 200,
            "end": 210
          },
          "start": 191,
          "end": 210
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 212,
        "end": 214
      },
      "expression": false,
      "start": 174,
      "end": 214
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 214
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
    "value": "ISomething",
    "start": 10,
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
    "value": "foo",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
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
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "ISomething",
    "start": 88,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "ISomething",
    "start": 133,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 174,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  }
]
```
